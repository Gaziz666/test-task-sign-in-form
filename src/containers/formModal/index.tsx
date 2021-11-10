import React, { useState, useEffect, useRef, createRef } from 'react'
import { useParams, useHistory } from 'react-router'
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik'
// import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form'

import { Modal } from '../../components/modal'
import { Title } from '../../components/title'
import { Input } from '../../components/input'
import { ColumnContainer, Container, RowContainer } from './styles'
import { Select } from '../../components/select'
import { TextArea } from '../../components/textArea'
import { Button } from '../../components/button'
import { CheckBox } from '../../components/checkBox'
import { Dropdown, DropdownItem } from '../../components/dropdown'

type IParam = {
  open?: string
}

export type IValue = {
  select1: string
  select2: string
  input1: string
  input2: string
  input4: string
  input5: string
  textarea: string
}

const selectOptions1 = [
  { name: 'field1', value: 'field1' },
  { name: 'field2', value: 'field2' },
  { name: 'field3', value: 'field3' }
]
const selectOptions2 = [
  { name: 'field4', value: 'field4' },
  { name: 'field5', value: 'field5' },
  { name: 'field6', value: 'field6' }
]

export const FormModal: React.FC = () => {
  const { open } = useParams<IParam>()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const input1 = createRef<HTMLInputElement>()
  const input2 = useRef()
  const input10 = useRef()
  const input4 = useRef()
  const input5 = useRef()
  const select1 = useRef()
  const select2 = useRef()
  const textarea = useRef()

  useEffect(() => {
    if (open === 'open') setIsOpen(true)
  }, [open])

  const initialValue = {
    select1: 'field1',
    select2: 'field4',
    input1: '',
    input2: '',
    input4: '',
    input5: '',
    textarea: ''
  }

  const keyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
    console.log('key', e.code)
    console.log('down', e.currentTarget, input1)
  }

  const sendData = async (
    values: IValue,
    { setSubmitting }: FormikHelpers<IValue>
  ) => {
    console.log(values, setSubmitting)
    await new Promise((r) => setTimeout(r, 500))
    // alert(JSON.stringify(values, null, 2))
  }

  const closeModal = () => {
    history.push('/')
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Title size={'1rem'}>Form {open}</Title>
      <Formik initialValues={initialValue} onSubmit={sendData}>
        {(props: FormikProps<IValue>) => (
          <Form>
            <Container>
              <ColumnContainer>
                <Field
                  as={Select}
                  innerRef={select1}
                  type="select"
                  name="select1"
                  label="select1"
                  id="select1"
                  tabindex="1"
                  options={selectOptions1}
                />
                <Field
                  placeholder={'input1'}
                  innerRef={input1.current}
                  type="text"
                  name="input1"
                  id="input1"
                  as={Input}
                  tabindex="2"
                  onKeyDown={keyDown}
                  {...props}
                />
                <Field
                  placeholder={'input10'}
                  innerRef={input10}
                  type="text"
                  name="input10"
                  id="input10"
                  tabindex="20"
                />
                <Field
                  placeholder={'input2'}
                  ref={input2}
                  type="text"
                  name="input2"
                  id="input2"
                  as={Input}
                  tabindex="3"
                />
              </ColumnContainer>
              <RowContainer>
                <Field
                  as={TextArea}
                  name="textarea"
                  ref={textarea}
                  id="textarea"
                  type="textarea"
                  rows={10}
                  cols={10}
                  tabindex="4"
                />
                <ColumnContainer>
                  <Field
                    as={Select}
                    name="select2"
                    ref={select2}
                    label="select2"
                    id="select2"
                    options={selectOptions2}
                    tabindex="5"
                  />
                  <Field
                    placeholder={'input4'}
                    ref={input4}
                    type="text"
                    name="input4"
                    id="input4"
                    as={Input}
                    tabindex="6"
                  />
                  <Field
                    placeholder={'input5'}
                    ref={input5}
                    type="text"
                    name="input5"
                    id="input5"
                    as={Input}
                    tabindex="7"
                  />
                  <CheckBox label="laaaabel" id="chackbox" value="sdf" />
                  <Dropdown label="dropdown">
                    {[1, 2, 3].map((item) => {
                      return <DropdownItem value={item}>{item}</DropdownItem>
                    })}
                  </Dropdown>
                </ColumnContainer>
              </RowContainer>
              <Button type="submit">Submit</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
