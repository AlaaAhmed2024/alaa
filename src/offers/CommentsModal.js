import React, { useEffect, useState, useRef } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faEllipsisVertical, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import photoName from "../alaa.jpeg";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import chatBackground from "./logo-head-dec.png"; 
dayjs.extend(relativeTime);

function CommentsModal({ offerId, open, onClose }) {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const userName = localStorage.getItem("name") || "مجهول";
  const photoUserShowLocalStorage = localStorage.getItem("photo") || photoName;
  const [replyToId, setReplyToId] = useState(null);
  const [replyToUser, setReplyToUser] = useState(null);
  const [editId, setEditId] = useState(null);
  const [showOptions, setShowOptions] = useState({});

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const firstOpenRef = useRef(true);
  const userScrolledUpRef = useRef(false);


  const fetchComments = async () => {
     if (!offerId) return; // لو null لا تجلب أي شيء
    try {
      const res = await fetch(`http://localhost:8090/comments/${offerId}`);
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (open) {
      fetchComments();
      const interval = setInterval(fetchComments, 5000);
      return () => clearInterval(interval);
    }
  }, [open, offerId]);

  // السكروول عند فتح المودال لأول مرة
  useEffect(() => {
    if (open && firstOpenRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      firstOpenRef.current = false;
    }
    if (!open) {
      firstOpenRef.current = true;
      userScrolledUpRef.current = false;
    }
  }, [open]);

  // تتبع السكروول لتحديد ما إذا قام المستخدم بالتمرير لأعلى
  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const atBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
    userScrolledUpRef.current = !atBottom;
  };

  // تحديث السكروول عند وصول تعليقات جديدة فقط إذا لم يقم المستخدم بالتمرير لأعلى
  useEffect(() => {
    if (!userScrolledUpRef.current && !firstOpenRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [comments]);




const sendComment = async () => {
  if (!message.trim()) return;

  try {
    if (editId) {
      // تعديل التعليق
      const res = await fetch(`http://localhost:8090/comments/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) throw new Error("Failed to edit");
      setEditId(null);
      setMessage("");
      await fetchComments();
      return; // لا ننزل بعد التعديل
    }

    // إرسال تعليق جديد أو رد
    const res = await fetch("http://localhost:8090/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        offerId,
        userName,
        message,
        replyTo: replyToId || null,
      }),
    });
    if (!res.ok) throw new Error("Failed to send comment");

    setMessage("");
    setReplyToId(null);
    setReplyToUser(null);
    await fetchComments();

    // النزول تلقائيًا لآخر تعليق
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

  } catch (err) {
    console.error(err);
  }
};

  

  // const sendComment = async () => {
  //   if (!message.trim()) return;

  //   try {
  //     if (editId) {
  //       const res = await fetch(`http://localhost:8090/comments/${editId}`, {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ message }),
  //       });
  //       if (!res.ok) throw new Error("Failed to edit");
  //       setEditId(null);
  //       setMessage("");
  //       await fetchComments();
  //       return;
  //     }

  //     const res = await fetch("http://localhost:8090/comments", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         offerId,
  //         userName,
  //         message,
  //         replyTo: replyToId || null,
  //       }),
  //     });
  //     if (!res.ok) throw new Error("Failed to send comment");
  //     setMessage("");
  //     setReplyToId(null);
  //     setReplyToUser(null);
  //     await fetchComments();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const toggleOptions = (id) => {
    setShowOptions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8090/comments/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchComments();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (id) => {
    const c = comments.find((c) => c.id === id);
    if (c) {
      setMessage(c.message);
      setEditId(id);
    }
  };

  const handleReply = (id, user) => {
    setReplyToId(id);
    setReplyToUser(user);
  };

  const renderTime = (createdAt) => {
    const now = dayjs();
    const created = dayjs(createdAt);
    const format12 = (date) => date.format("hh:mm A").replace("AM", "ص").replace("PM", "م");
    if (now.isSame(created, "day")) return format12(created);
    if (now.subtract(1, "day").isSame(created, "day")) return "أمس " + format12(created);
    return created.format("DD/MM/YYYY ") + format12(created);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          height: "500px",
          bgcolor: "white",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
            borderBottom: "1px solid #ddd",
          }}
        >
          <h5>{"التعليقات للعرض " + offerId||100}</h5>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* <Box
          ref={messagesContainerRef}
          onScroll={handleScroll}
          sx={{
            flex: 1,
            overflowY: "auto",
            p: 2,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(0,0,0,0.05)",
            backgroundBlendMode: "overlay",
            backgroundImage: `url(${chatBackground})`,
            backgroundSize: "40%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {comments.map((c) => (
            <div key={c.id} style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: c.userName === userName ? "flex-end" : "flex-start",
                  position: "relative",
                }}
              >
                <img
                  src={c.photo || photoUserShowLocalStorage}
                  alt={c.userName}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: c.userName === userName ? "0" : "8px",
                    marginLeft: c.userName === userName ? "8px" : "0",
                  }}
                />
                <div
                  style={{
                    background: c.userName === userName ? "#dcf8c6" : "#fff",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    maxWidth: "70%",
                    fontSize: "14px",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  <strong style={{color:"#0066cc" , fontWeight:"700"}}>{c.userName} </strong> 
                  <div>{c.message}</div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      marginTop: "2px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{renderTime(c.createdAt)}</span>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      style={{ cursor: "pointer", marginRight: "15px" }}
                      onClick={() => toggleOptions(c.id)}
                    />
                  </div>
                  {showOptions[c.id] && (
                    <div style={{ marginTop: "5px", display: "flex", gap: "5px" }}>
                      {c.userName === userName && (
                        <>
                          <button onClick={() => handleDelete(c.id)} style={{ fontSize: "11px", color: "red", background: "none", border: "none", cursor: "pointer" }}>حذف</button>
                          <button onClick={() => handleEdit(c.id)} style={{ fontSize: "11px", color: "#007bff", background: "none", border: "none", cursor: "pointer" }}>تعديل</button>
                        </>
                      )}
                      <button onClick={() => handleReply(c.id, c.userName)} style={{ fontSize: "11px", color: "green", background: "none", border: "none", cursor: "pointer" }}>رد</button>
                    </div>
                  )}
                </div>
              </div>

              {comments.filter((r) => r.replyTo === c.id).map((r) => (
                <div key={r.id} style={{ display: "flex", alignItems: "flex-start", justifyContent: r.userName === userName ? "flex-end" : "flex-start", marginLeft: "40px", marginTop: "4px" }}>
                  <div style={{ background: "#f1f0f0", padding: "6px 10px", borderRadius: "10px", maxWidth: "65%", fontSize: "13px" }}>
                    {r.replyTo && (
                      <div style={{ fontSize: "11px", color: "#555", borderLeft: "2px solid #25d366", paddingLeft: "4px", marginBottom: "4px" }}>
                        ردًا على: {comments.find((p) => p.id === r.replyTo)?.message}
                      </div>
                    )}
                    <strong>{r.userName}: </strong> {r.message}
                    <div style={{ fontSize: "9px", color: "#888", marginTop: "1px" }}>{renderTime(r.createdAt)}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </Box> */}


<Box
  ref={messagesContainerRef}
  onScroll={handleScroll}
  sx={{
    flex: 1,
    overflowY: "auto",
    p: 2,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.05)",
    backgroundBlendMode: "overlay",
    backgroundImage: `url(${chatBackground})`,
    backgroundSize: "40%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative", // مهم لزر العودة لآخر تعليق
  }}
>




   
   
   {!offerId ? (
  <div style={{ textAlign: "center", marginTop: "50%", color: "#666", fontSize: "14px" }}>
    لا يوجد عرض محدد حالياً✨
  </div>
) : comments.length === 0 ? (
  <div style={{ textAlign: "center", marginTop: "50%", color: "#6e6d6d", fontSize: "13px" ,backgroundColor:"#FFF" ,padding:"10px",
}}>
    لا توجد تعليقات بعد
  </div>
) : (
   comments.map((c) => (
            <div key={c.id} style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: c.userName === userName ? "flex-end" : "flex-start",
                  position: "relative",
                }}
              >
                <img
                  src={c.photo || photoUserShowLocalStorage}
                  alt={c.userName}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: c.userName === userName ? "0" : "8px",
                    marginLeft: c.userName === userName ? "8px" : "0",
                  }}
                />
                <div
                  style={{
                    background: c.userName === userName ? "#dcf8c6" : "#fff",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    maxWidth: "70%",
                    fontSize: "14px",
                    boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
                  }}
                >
                  <strong style={{color:"#0066cc" , fontWeight:"700"}}>{c.userName} </strong> 
                  <div>{c.message}</div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#888",
                      marginTop: "2px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{renderTime(c.createdAt)}</span>
                    <FontAwesomeIcon
                      icon={faEllipsisVertical}
                      style={{ cursor: "pointer", marginRight: "12px" , fontSize:"14px" }}
                      onClick={() => toggleOptions(c.id)}
                    />
                  </div>
                  {showOptions[c.id] && (
                    <div style={{ marginTop: "5px", display: "flex", gap: "5px" }}>
                      {c.userName === userName && (
                        <>
                          <button onClick={() => handleDelete(c.id)} style={{ fontSize: "11px", color: "red", background: "none", border: "none", cursor: "pointer" }}>حذف</button>
                          <button onClick={() => handleEdit(c.id)} style={{ fontSize: "11px", color: "#007bff", background: "none", border: "none", cursor: "pointer" }}>تعديل</button>
                        </>
                      )}
                      <button onClick={() => handleReply(c.id, c.userName)} style={{ fontSize: "11px", color: "green", background: "none", border: "none", cursor: "pointer" }}>رد</button>
                    </div>
                  )}
                </div>
              </div>

              {comments.filter((r) => r.replyTo === c.id).map((r) => (
                <div key={r.id} style={{ display: "flex", alignItems: "flex-start", justifyContent: r.userName === userName ? "flex-end" : "flex-start", marginLeft: "40px", marginTop: "4px" }}>
                  <div style={{ background: "#f1f0f0", padding: "6px 10px", borderRadius: "10px", maxWidth: "65%", fontSize: "13px" }}>
                    {r.replyTo && (
                      <div style={{ fontSize: "11px", color: "#555", borderLeft: "2px solid #25d366", paddingLeft: "4px", marginBottom: "4px" }}>
                        ردًا على: {comments.find((p) => p.id === r.replyTo)?.message}
                      </div>
                    )}
                    <strong>{r.userName}: </strong> {r.message}
                    <div style={{ fontSize: "9px", color: "#888", marginTop: "1px" }}>{renderTime(r.createdAt)}</div>
                  </div>
                </div>
              ))}
            </div>
          )))}
  <div ref={messagesEndRef} />

  {/* زر العودة لآخر تعليق */}
  {userScrolledUpRef.current && (
    <button
      onClick={() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        userScrolledUpRef.current = false;
      }}
      style={{
        position: "absolute",
        bottom: "10px",
        right: "10px",
        background: "#25d366",
        color: "#fff",
        border: "none",
        borderRadius: "20px",
        padding: "6px 12px",
        cursor: "pointer",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
        fontSize: "12px",
      }}
    >
       <FontAwesomeIcon icon={faCircleChevronDown} />
    </button>
  )}
</Box>


        <Box sx={{ display: "flex", flexDirection: "column", borderTop: "1px solid #ddd", p: 1 }}>
          {(replyToUser || editId) && (
            <div style={{ fontSize: "12px", color: "#555", marginBottom: "5px", background: "#f0f0f0", padding: "4px 8px", borderRadius: "6px" }}>
              {editId ? (
                <>تعديل تعليقك</>
              ) : (
                <>
                  ترد على: <strong>{replyToUser}</strong> -{" "}
                  <span style={{ fontStyle: "italic", color: "#666" }}>
                    {comments.find(c => c.id === replyToId)?.message.slice(0, 50)}
                    {comments.find(c => c.id === replyToId)?.message.length > 50 ? "..." : ""}
                  </span>
                </>
              )}
              <button
                onClick={() => { setReplyToId(null); setReplyToUser(null); setEditId(null); }}
                style={{ marginLeft: "10px", fontSize: "11px", color: "red", background: "none", border: "none", cursor: "pointer" }}
              >
                إلغاء
              </button>
            </div>
          )}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="اكتب تعليقك..."
            style={{ flex: 1, borderRadius: "8px", border: "1px solid #ccc", padding: "8px" }}
          />
          <button
            onClick={sendComment}
            disabled={message === ""}
            style={{ marginLeft: "5px", background: message === "" ? "#797979ff" : "#25d366", color: "#fff", border: "none", borderRadius: "8px", padding: "8px 12px", cursor: message === "" ? "not-allowed" : "pointer" }}
          >
            <FontAwesomeIcon icon={faPaperPlane} rotation={45} />
          </button>
        </Box>
      </Box>
    </Modal>
  );
}

export default CommentsModal;
