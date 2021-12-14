import prismaClient from "../prisma";

class GetLast3MessagesService {
    async execute () {
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_At: "desc", // I want him to get the newest message to the oldest, 3 messages
            },
            include: {
                user: true
            }
        });

        // SELECT * FROM MENSAGENS LIMIT 3 ORDER BY CREATED_At DESC

        return messages;
    }
}

export { GetLast3MessagesService };