export const normalizeObligations = (obligations = []) => {
  return obligations.map(ob => {
    const installment = Number(ob.value) || 0;
    let duration = 0;

    if (ob.type === "المدة المتبقية") {
      duration = Number(ob.remaining) || 0;
    }

    if (ob.type === "المبلغ المتبقي") {
      const remainingAmount = Number(ob.remaining) || 0;
      duration = installment > 0
        ? Math.ceil(remainingAmount / installment)
        : 0;
    }

    return {
      name: ob.name,
      installment,
      duration
    };
  });
};
