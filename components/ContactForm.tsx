import Head from 'next/head'
import { VStack, FormControl, FormLabel, InputGroup, InputLeftElement, Input, Textarea, Button,  } from '@chakra-ui/react'
import { useState } from 'react'
import { BsPerson, BsPhone } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'


const ContactForm = (props: any) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
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
                  </>
  )
}

export default ContactForm;