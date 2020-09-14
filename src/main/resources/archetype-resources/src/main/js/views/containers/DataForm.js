import React from 'react';

import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';

import { injectIntl } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Formik, Form } from 'formik';

import { create } from 'entities/actions';

const EntitySchema = Yup.object().shape({
   name: Yup.string()
      .min(0, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
});

function DataForm({ intl }) {
   const initialValues = {
      name: ''
   };

   const dispatch = useDispatch();

   function onSelect(event) {
      dispatch(create(event));
   }

   return <Formik
      onSubmit={(form) => onSelect(form)}
      initialValues={initialValues}
      validationSchema={EntitySchema}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
         <Form>
            <Grid container direction='column'>
               <TextField
                  id='name'
                  label='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={(errors.name && touched.name) && errors.name}
               />
               <Button aria-label="save" type="submit" variant='contained'>
                  { intl.formatMessage({ id: 'form.send' }) }
               </Button>
            </Grid>
         </Form>
      )}
   </Formik>;

}

DataForm.propTypes = {
   intl: PropTypes.object.isRequired,
   action: PropTypes.func.isRequired
};

export default injectIntl(DataForm);
