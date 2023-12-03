const coreUrl = "http://localhost:4000";

const getAllSports = async () => {
  try {
    const response = await fetch(`${coreUrl}/sports`, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getAllSports;
