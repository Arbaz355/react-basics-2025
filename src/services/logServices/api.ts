export const fetchData = async (reqBody) => {
        try {
            const response = await axiosCustomInstance.post("/posts", {
                body: reqBody,
            });
            return response;
        }
        catch (err) {
            console.error(err)
        }
    }