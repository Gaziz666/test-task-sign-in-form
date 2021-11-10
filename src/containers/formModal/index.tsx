import React, { useState, useEffect, useRef, createRef } from 'react'
import { useParams, useHistory } from 'react-router'
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik'
// import { Path, useForm, UseFormRegister, SubmitHandler } from 'react-hook-form'

import { Modal } from '../../components/modal'
import { Title } from '../../components/title'
import { Input } from '../../components/input'
import {
  ColumnContainer,
  Container,
  DescriptionContainer,
  Description,
  Link
} from './styles'
import { Select } from '../../components/select'
import { TextArea } from '../../components/textArea'
import { Button } from '../../components/button'
import { CheckBox } from '../../components/checkBox'
import { Dropdown, DropdownItem } from '../../components/dropdown'
import { LanguageSelectField } from '../languageSelectField'
import { ILanguage } from '../../@types/styled'

type IParam = {
  open?: string
}

export type IValue = {
  name: string
  email: string
  phone: string
  lang: string
}

export const FormModal: React.FC = () => {
  const { open } = useParams<IParam>()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedLang, setSelectedLang] = useState<ILanguage | null>(null)

  useEffect(() => {
    if (open === 'open') setIsOpen(true)
  }, [open])

  const initialValue = {
    name: '',
    email: '',
    phone: '',
    lang: ''
  }

  const handaleLangSelect = (item: ILanguage) => {
    setSelectedLang(item)
  }

  const sendData = async (
    values: IValue,
    { setSubmitting }: FormikHelpers<IValue>
  ) => {
    console.log(values, setSubmitting, selectedLang)
    await new Promise((r) => setTimeout(r, 500))
    // alert(JSON.stringify(values, null, 2))
  }

  const closeModal = () => {
    history.push('/')
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <Title center={false}>Регистрация</Title>
      <DescriptionContainer>
        <Description>Уже есть аккаунт? </Description>
        <Link>Войти</Link>
      </DescriptionContainer>

      <Formik initialValues={initialValue} onSubmit={sendData}>
        {(props: FormikProps<IValue>) => (
          <Form>
            <Container>
              <ColumnContainer>
                <Field
                  placeholder={'Введите Ваше имя'}
                  label="Имя"
                  type="text"
                  name="name"
                  id="name"
                  as={Input}
                  tabindex="1"
                />
                <Field
                  placeholder={'Введите Ваш email'}
                  type="email"
                  name="email"
                  label="Email"
                  id="email"
                  as={Input}
                  tabindex="2"
                />
                <Field
                  placeholder={'Введите номер телефона'}
                  type="text"
                  name="phone"
                  label="Номер телефона"
                  id="phone"
                  as={Input}
                  tabindex="3"
                />

                <LanguageSelectField
                  value={selectedLang ? selectedLang!.lang : ''}
                  name="lang"
                  placeholder="Язык"
                  label="Язык"
                  onChange={handaleLangSelect}
                />
                <CheckBox
                  label={
                    <>
                      Принимаю <Link>условия</Link> использования
                    </>
                  }
                  id="chackbox"
                  value="sdf"
                />
              </ColumnContainer>

              <Button type="submit">Зарегистрироваться</Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
