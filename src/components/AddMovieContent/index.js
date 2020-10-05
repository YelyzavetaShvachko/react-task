import React from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import FormError from '../FormError';

import {
  ModalTitle,
  ModalForm,
  FormItem,
  FormInput,
  BtnWrapper,
  SubmitBtn,
  CancelBtn
} from '../styled.js';

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1, 'Must have at least 1 character')
    .required('Title is required field'),
  date: Yup.date()
    .max(new Date(), 'Must be released in past time')
    .required('Release date is required field'),
  link: Yup.string()
    .min(1, 'Must have at least 1 character')
    .url('Must be a valid url')
    .required('Movie link is required field'),
  // genre: Yup.array()
  //   .min(1, 'At least 1 genre must be added')
  //   .required('Genre is required field'),
  genre: Yup.string()
    .min(1, 'At least 1 genre must be added')
    .required('Genre is required field'),
  overview: Yup.string()
    .min(1, 'Must have at least 1 character')
    .required('Overview is required field'),
  runtime: Yup.number()
    .min(1, 'Runtime should be numeric and longer then 0 min')
    .required('Runtime is required field')
});

const AddMovieContext = () => {
  const initialValues = {
    // same to input names
    title: '',
    date: '',
    link: '',
    genre: '',
    overview: '',
    runtime: ''
  };

  const formik = useFormik({
    initialValues: initialValues
  });
  return (
    <>
      <ModalTitle>ADD MOVIE</ModalTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            console.log('submitted data', JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          resetForm
        }) => (
          <ModalForm onSubmit={handleSubmit} >
            <FormItem htmlFor="title" >
                TITLE
              <FormInput
                type="text"
                value={values.title}
                placeholder="Moana"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.title && errors.title ? 'has-error' : null}
              />
              <FormError touched={touched.title} message={errors.title} />
            </FormItem>
            <FormItem htmlFor="date" >
                RELEASE DATE
              <FormInput
                type="text"
                placeholder="Select Date MM/dd/yyyy"
                id="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.date && errors.date ? 'has-error' : null}
              />
              <FormError touched={touched.date} message={errors.date} />
            </FormItem>
            <FormItem htmlFor="link">
                MOVIE URL
              <FormInput
                type="text"
                placeholder="Movie URL here"
                id="link"
                value={values.link}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.link && errors.link ? 'has-error' : null}
              />
              <FormError touched={touched.link} message={errors.link} />
            </FormItem>
            <FormItem htmlFor="genre" >
                GENRE
              <FormInput
                type="text"
                placeholder="Select Genre"
                id="genre"
                value={values.genre}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.genre && errors.genre ? 'has-error' : null}
              />
              <FormError touched={touched.genre} message={errors.genre} />
            </FormItem>
            <FormItem htmlFor="overview" >
                OVERVIEW
              <FormInput
                type="text"
                placeholder="Overview here"
                id="overview"
                value={values.overview}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.overview && errors.overview ? 'has-error' : null}
              />
              <FormError touched={touched.overview} message={errors.overview} />
            </FormItem>
            <FormItem htmlFor="runtime" >
                RUNTIME
              <FormInput
                type="text"
                placeholder="Runtime here"
                id="runtime"
                value={values.runtime}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.runtime && errors.runtime ? 'has-error' : null}
              />
              <FormError touched={touched.runtime} message={errors.runtime} />
            </FormItem>
            <BtnWrapper>
              <CancelBtn onClick={() => resetForm(initialValues)}>RESET</CancelBtn>
              <SubmitBtn disabled={isSubmitting} type="submit">SUBMIT</SubmitBtn>
            </BtnWrapper>
          </ModalForm>
        )}
      </Formik>
    </>
  );
};

export default AddMovieContext;
// https://www.youtube.com/watch?v=TxEVnaISj1w - how to use formik