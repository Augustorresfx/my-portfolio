import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link';

export default function Hero() {
    return (
        <Stack zIndex={-1} minH={'100vh'} minW={'380px'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text zIndex={-1} as={'span'} position={'relative'} _after={{
                            content: "''",
                            width: 'full',
                            height: useBreakpointValue({ base: '20%', md: '30%' }),
                            position: 'absolute',
                            bottom: 1,
                            left: 0,
                            bg: 'blue.400',
                            zIndex: -1,
                        }}>
                            Hola!
                        </Text>
                        <br />{' '}
                        <Text zIndex={-1} color={'blue.400'} as={'span'}>
                            soy Augusto. 👨🏽‍💻
                        </Text>{' '}
                    </Heading>
                    <Text zIndex={-1} fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Jr. Front End Developer, usualmente diseñador gráfico.
                    </Text>
                    <Stack zIndex={-1} direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            zIndex={0}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{ bg: 'blue.500',}}
                            
                        ><Link href={'#categorias'}>
                            Ver más sobre mi
                        </Link>
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image alt={'Oeste tienda'}
                height={{ base: '370px', md: '460px', lg: '550px', xl: '650px' }}
                objectFit={'cover'}
                src={
                    'https://i.postimg.cc/52BMfwy0/hero.png'
                }/>
            </Flex>
        </Stack>
    );
}