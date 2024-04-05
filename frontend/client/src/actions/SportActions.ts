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

const getSport = async (slug: string) => {
    try {
        const response = await fetch(`${coreUrl}/sports/detail/${slug}`, {
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

const updateSport = async (slug: string, body: string) => {
    try {
        const response = await fetch(`${coreUrl}/sports/${slug}/update`, {
            method: 'PUT',
            mode: 'cors',
            body: body,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            return null
        } else {
            return response.json()
        }
        return await response.json()
    } catch (error) {
        console.error(error);
    }
}

const createSport = async (body: string) => {
    try {
        const response = await fetch(`${coreUrl}/sports/new`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: body,
        });

        if (!response.ok) {
            return null
        } else {
            return response.json()
        }
    } catch (error) {
        console.error(error);
    }
};

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

        return await response.json()
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

export {getAllSports, createSport, updateSport, deleteSport, addLike, dislike, getSport};