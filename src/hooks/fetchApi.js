export async function fetchApi(url, method, body) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return {
      data: await response.json(),
      ok: response.ok,
      status: response.status,
    };
  } catch (error) {
    console.log(error);
  }
}
