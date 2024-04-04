const coreUrl = "http://localhost:4000";

const getAllSports = async () => {
  try {
    const response = await fetch(`${coreUrl}/sports/all`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

const updateSport = async (slug: string) => {
  try {
    const response = await fetch(`${coreUrl}/sports/${slug}/update`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

const deleteSport = async (slug: string) => {
  try {
    const response = await fetch(`${coreUrl}/sports/delete/${slug}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}



const addLike = async (slug: string) => {
  try {
    const response = await fetch(`${coreUrl}/sports/${slug}/like`, {
      method: 'UPDATE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

const dislike = async (slug: string) => {
  try {
    const response = await fetch(`${coreUrl}/sports/${slug}/remove`, {
      method: 'UPDATE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`An error occurred: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error);
  }
}

export {getAllSports, updateSport, deleteSport, addLike, dislike };
