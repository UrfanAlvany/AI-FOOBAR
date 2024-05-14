const API_URL = process.env.NEXT_PUBLIC_API_URL!;

interface ApiResponse {
    message: string;
    model_used: string;
}

export const sendMessage = async (prompt: string): Promise<ApiResponse> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: ApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};
