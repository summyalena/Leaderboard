const POST = async (api, data) => {
  await fetch(api, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
export default POST;