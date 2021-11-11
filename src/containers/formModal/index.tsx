import React, { useState, useEffect, useRef, createRef } from 'react'
import { useParams, useHistory } from 'react-router'
import { Formik, Field, Form, FormikHelpers, FormikProps } from 'formik'
import * as Yup from 'yup'

import { Modal } from '../../components/modal'
import { Title } from '../../components/title'
import {
  ColumnContainer,
  Container,
  DescriptionContainer,
  Description,
  Link
} from './styles'
import { Button } from '../../components/button'
import { CheckBox } from '../../components/checkBox'
import { LanguageSelectField } from '../languageSelectField'
import { ILanguage } from '../../@types/styled'
import InputField from '../inputField'

type IParam = {
  open?: string
}

export type IValue = {
  name: string
  email: string
  phone: string
  lang: string
}

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('обязательно для заполнения')
    .matches(
      /^([-A-Za-zА-Яа-я ])+$/,
      'Имя может содержать только буквы, дефис и пробел'
    ),
  email: Yup.string()
    .required('обязательно для заполнения')
    .email('Введено не корректное значение'),
  phone: Yup.string()
    .required('обязательно для заполнения')
    .matches(/^([-0-9()+])+$/, 'номер может содержать только цифры (,),-,+')
})

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
    if (!selectedLang) {
      return
    }
    values.lang = selectedLang.lang
    console.log('value', values)
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

      <Formik
        initialValues={initialValue}
        onSubmit={sendData}
        validationSchema={SignUpSchema}
      >
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
                  component={InputField}
                  tabindex="1"
                />
                <Field
                  placeholder={'Введите Ваш email'}
                  type="email"
                  name="email"
                  label="Email"
                  id="email"
                  component={InputField}
                  tabindex="2"
                />
                <Field
                  placeholder={'Введите номер телефона'}
                  type="text"
                  name="phone"
                  label="Номер телефона"
                  id="phone"
                  component={InputField}
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
              <Button
                disable={
                  selectedLang
                    ? Object.keys(props.errors).length === 0
                      ? false
                      : true
                    : true
                }
                type="submit"
              >
                Зарегистрироваться
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}
