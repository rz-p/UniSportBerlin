const coreUrl = "http://localhost:4000";

const login = async (username: string, password: string) => {
    try {
        const response = await fetch(`${coreUrl}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password}),
        });
        if (!response.ok) {
            return null
        } else {
            return response.json()
        }
    } catch (error) {
        console.error(error);
    }
}

export {login};
