import Head from 'next/head'
import { VStack, FormControl, FormLabel, useClipboard,
  useColorModeValue, Link, Flex, Box, Heading, Stack, Tooltip, IconButton, InputGroup, InputLeftElement, Input, Textarea, Button,  } from '@chakra-ui/react'
import { useState } from 'react'
import { BsPerson, BsTwitter, BsLinkedin, BsGithub, BsFacebook, BsPhone } from 'react-icons/bs'
import { MdOutlineEmail, MdEmail } from 'react-icons/md'
import { FormEvent } from 'react';

const ContactForm = (props: any) => {

  const { hasCopied, onCopy } = useClipboard('augustorresfx@gmail.com');

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        phone,
        email,
        message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')
        }
    })
  }

  return (<>
      <Flex minW={'398px'}

align="center"
justify="center"
id="contact">
<Box
  borderRadius="lg"
  m={{ base: 5, md: 16, lg: 10 }}
  p={{ base: 5, lg: 16 }}>
  <Box>
    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
      <Heading
        fontSize={{
          base: '4xl',
          md: '5xl',
        }}>
        Contáctame. 📩
      </Heading>

      <Stack
        spacing={{ base: 4, md: 8, lg: 20 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack
          align="center"
          justify="space-around"
          direction={{ base: 'row', md: 'column' }}>
          <Tooltip
            label={hasCopied ? 'Email Copied!' : 'Copy Email'}
            closeOnClick={false}
            hasArrow>
            <IconButton
              aria-label="email"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<MdEmail />}
              _hover={{
                bg: 'blue.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
              onClick={onCopy}
              isRound
            />
          </Tooltip>

          <Link href="#">
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              fontSize="3xl"
              icon={<BsGithub />}
              _hover={{
                bg: 'blue.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
              isRound
            />
          </Link>

          <Link href="#">
            <IconButton
              aria-label="twitter"
              variant="ghost"
              size="lg"
              icon={<BsTwitter size="28px" />}
              _hover={{
                bg: 'blue.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
              isRound
            />
          </Link>

          <Link href="#">
            <IconButton
              aria-label="linkedin"
              variant="ghost"
              size="lg"
              icon={<BsLinkedin size="28px" />}
              _hover={{
                bg: 'blue.500',
                color: useColorModeValue('white', 'gray.700'),
              }}
              isRound
            />
          </Link>
        </Stack>

        <Box
          bg={useColorModeValue('white', 'gray.700')}
          borderRadius="lg"
          p={8}
          color={useColorModeValue('gray.700', 'whiteAlpha.900')}
          shadow="base">
    <form onSubmit={handleSubmit}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement>
                        <BsPerson />
                        </InputLeftElement>
                        <Input value={name} onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Tu nombre" />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement>
                        <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                        value={email} onChange={e => setEmail(e.target.value)}
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Tu Email"
                        />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Teléfono</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement>
                        <BsPhone />
                        </InputLeftElement>
                        <Input value={phone} onChange={e => setPhone(e.target.value)} type="tel" id="phone" name="phone" placeholder="Tu número de teléfono" />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Mensaje</FormLabel>
  
                      <Textarea
                      value={message} onChange={e => setMessage(e.target.value)}
                        name="message"
                        id="message"
                        placeholder="Tu mensaje"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>
  
                    <Button
                      type="submit"
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: 'blue.500',
                      }}
                      >
                      Enviar Mensaje
                    </Button>
                  </VStack>
                  </form>
                  </Box>
                
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
                  </>
  )
}

export default ContactForm;