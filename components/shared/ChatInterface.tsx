import React, { useState, useRef, useEffect, FormEvent } from 'react';
import {
    ChakraProvider,
    Box,
    VStack,
    Input,
    Button,
    useToast,
    FormControl,
    Text,
    Image,
    Center,
    Badge
} from '@chakra-ui/react';
import { sendMessage } from "@/app/api/service";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
    timestamp?: string;
    imgSrc?: string;
    modelUsed?: string;
}

const ChatInterface = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [activeModel, setActiveModel] = useState('gpt-35-turbo');
    const toast = useToast();
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        hljs.highlightAll();
    }, [messages]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const initialAI: Message = {
            id: 1,
            text: "Hello, I'm the Program Solving AI. How may I assist you today?",
            sender: 'ai',
            timestamp: new Date().toLocaleTimeString(),
            imgSrc: "/assets/icons/ai.svg"
        };
        setMessages([initialAI]);
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement> | any) => {
        e.preventDefault();
        if (!input.trim()) return;
        setIsLoading(true);

        const userMessage: Message = {
            id: messages.length * 2 + 1,
            text: input,
            sender: 'user',
            timestamp: new Date().toLocaleTimeString()
        };

        setMessages(msgs => [...msgs, userMessage]);

        try {
            const response = await sendMessage(input);
            const aiMessage: Message = {
                id: messages.length * 2 + 2,
                text: response.message,
                sender: 'ai',
                timestamp: new Date().toLocaleTimeString(),
                imgSrc: "/assets/icons/ai.svg",
                modelUsed: response.model_used
            };
            setActiveModel(response.model_used);
            setMessages(msgs => [...msgs, aiMessage]);
        } catch (error) {
            console.error('Failed to send message:', error);
            toast({
                title: 'Error',
                description: 'Failed to send message.',
                status: 'error',
                duration: 6000,
                isClosable: true,
            });
        } finally {
            setInput('');
            setIsLoading(false);
        }
    };

    return (
        <ChakraProvider>
            <Box className="chat-container" w="100%" h="100vh" p={4} bg="gray.800" display="flex"
                 flexDirection="column">
                <Center py={4}>
                    <Badge fontSize="1.2em" px={4} py={2} colorScheme="purple" variant={activeModel === 'gpt-35-turbo' ? 'solid' : 'outline'} mr={2}>
                        GPT-3.5
                    </Badge>
                    <Badge fontSize="1.2em" px={4} py={2} colorScheme="purple" variant={activeModel === 'gpt-4-turbo' ? 'solid' : 'outline'}>
                        GPT-4.0
                    </Badge>
                </Center>
                <VStack className="hide-scrollbar" spacing={4} overflowY="auto" flex="1" p={4} alignItems="stretch">
                    {messages.map((message, index) => (
                        <Box
                            key={index}
                            p={3}
                            borderRadius="lg"
                            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                            display="flex"
                            flexDirection="column"
                            alignItems="flex-start"
                            maxWidth="80%">
                            {message.sender === 'ai' && message.imgSrc && (
                                <Image className="message-icon" src={message.imgSrc} alt="AI Icon"/>
                            )}
                            <pre><code>{message.text}</code></pre>
                            {message.timestamp && <Text fontSize="xs" color="gray.300">{message.timestamp}</Text>}
                        </Box>
                    ))}
                    <div ref={messagesEndRef}/>
                </VStack>
                <FormControl as="form" onSubmit={handleSubmit} mt="auto" p={4} borderTop="1px solid gray.600"
                             display="flex">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask your programming question..."
                        bg="white"
                        color="gray.800"
                        mr={4}
                        flex="1"
                        borderRadius="md"
                    />
                    <Button colorScheme="purple" px={9} type="submit" isLoading={isLoading}>
                        Send
                    </Button>
                </FormControl>
            </Box>
        </ChakraProvider>
    );
};

export default ChatInterface;
