export const sendResponse = (res, data) => {
  res.status(data?.statusCode || 500).json({
    success: data?.success ?? true,
    message: data?.message || "",
    data: data?.data || null,
  });
};
