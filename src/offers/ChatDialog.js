import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

function ChatModal({ open, onClose, offerId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const userAddData = localStorage.getItem("userAddData"); 
  const messagesEndRef = useRef(null);

  // جلب التعليقات عند فتح المودال
  useEffect(() => {
    if (open) {
      axios.get(`http://localhost:8082/comments/${offerId}`)
        .then(res => setComments(res.data))
        .catch(err => console.error(err));
    }
  }, [open, offerId]);

  // تمرير تلقائي لآخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [comments]);

  // إرسال تعليق
  const handleSend = () => {
    if (!newComment.trim()) return;

    axios.post("http://localhost:8082/addComment", {
      offerId,
      userName: userAddData,
      comment: newComment
    })
    .then(res => {
      setComments([{ 
        id: res.data.id, 
        userName: userAddData, 
        comment: newComment, 
        created_at: new Date().toISOString() 
      }, ...comments]);
      setNewComment("");
    })
    .catch(err => console.error(err));
  };

  return (
    <Modal open={open} onClose={onClose} 
    
  slots={{
    backdrop: Box, // نستخدم Box كـ backdrop
  }}
  slotProps={{
    backdrop: {
      sx: {
        backgroundColor: "rgba(0,0,0,0.4)" // لون أسود شفاف خفيف
      }
    }
  }}
    >
      <Box 
       onClick={(e) => e.stopPropagation()}
      sx={{
        width: "400px",
        height: "500px",
        bgcolor: "white",
        borderRadius: "12px",
        p: 2,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <h5>💬 شات العرض #{offerId}</h5>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        <Box sx={{ flex: 1, overflowY: "auto", p: 1, bgcolor: "#f7f7f7", borderRadius: "8px" }}>
          {comments.map((c) => {
            const isMe = c.userName == userAddData;
            return (
              <Box
                key={c.id}
                sx={{ display: "flex", justifyContent: isMe ? "flex-end" : "flex-start", mb: 1 }}
              >
                <Box
                  sx={{
                    bgcolor: isMe ? "#dcf8c6" : "white",
                    p: 1.5,
                    borderRadius: "10px",
                    maxWidth: "70%",
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.2)",
                  }}
                >
                  <strong style={{ fontSize: "0.85em", color: "#555" }}>{c.userName}</strong>
                  <div>{c.comment}</div>
                  <small style={{ fontSize: "0.7em", color: "#999" }}>
                    {new Date(c.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </small>
                </Box>
              </Box>
            );
          })}
          <div ref={messagesEndRef} />
        </Box>

        <Box sx={{ display: "flex", mt: 1 }}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="اكتب تعليقك..."
            style={{ flex: 1, padding: "8px", borderRadius: "8px", border: "1px solid #ccc", marginRight: "5px" }}
          />
          <button onClick={handleSend} style={{ padding: "8px 12px", borderRadius: "8px", background: "#25d366", color: "white", border: "none" }}>
           <FontAwesomeIcon icon={faPaperPlane} rotation={45} />
          </button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ChatModal;
