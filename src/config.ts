const fieldsForRegsiter = {
    first_name: {
        label: 'First Name',
        value: '',
        type: 'text',
        validation: {
          required: true
        }
      },
      last_name: {
        label: 'Last Name',
        value: '',
        type: 'text',
      },
      phone: {
        label: 'Phone Number',
        value: '',
        type: 'tel',
      },
      email: {
        label: 'Email',
        value: '',
        type: 'email',
        validation: {
          required: true
        }
      },
      zip: {
        label: 'Zip Code',
        value: '',
        type: 'number',
      },
};

const checklist = {
  items : [
    {
      name : 'Generall Documents',
      open: false,
      children : [
        {
          name: 'Sallary decleration',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Allimente',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Income replacement insurance',
          status: 'not uploaded',
          icon: ''
        },
      ]
    },
    {
      name : 'Income Reciept',
      open: false,
      children : [
        {
          name: 'Sallary decleration',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Allimente',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Income replacement insurance',
          status: 'not uploaded',
          icon: ''
        },
      ]
    },
    {
      name : 'Wealth',
      open: false,
      children : [
        {
          name: 'Sallary decleration',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Allimente',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Income replacement insurance',
          status: 'not uploaded',
          icon: ''
        },
      ]
    },
    {
      name : 'Depths',
      open: false,
      children : [
        {
          name: 'Sallary decleration',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Allimente',
          status: 'not uploaded',
          icon: ''
        },
        {
          name: 'Income replacement insurance',
          status: 'not uploaded',
          icon: ''
        },
      ]
    },
  ]
}

export {fieldsForRegsiter, checklist};