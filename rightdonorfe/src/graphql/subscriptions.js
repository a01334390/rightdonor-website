/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDonor = `subscription OnCreateDonor {
  onCreateDonor {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    canDonateFrom
    donations {
      items {
        id
        dateNeeded
        dateFulfilled
        bloodBagId
        bagAmount
      }
      nextToken
    }
    interviews {
      date
      weight
      recentSickness
      recentAntibiotics
      recentPregnancy
      recentAlcohol
      recentVaccines
      recentTattoos
      recentMenstrualCycle
      diabetic
      hypertension
      bloodresults {
        vih
        hepatitisB
        hepatitisC
        syphilis
        chagas
      }
    }
  }
}
`;
export const onUpdateDonor = `subscription OnUpdateDonor {
  onUpdateDonor {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    canDonateFrom
    donations {
      items {
        id
        dateNeeded
        dateFulfilled
        bloodBagId
        bagAmount
      }
      nextToken
    }
    interviews {
      date
      weight
      recentSickness
      recentAntibiotics
      recentPregnancy
      recentAlcohol
      recentVaccines
      recentTattoos
      recentMenstrualCycle
      diabetic
      hypertension
      bloodresults {
        vih
        hepatitisB
        hepatitisC
        syphilis
        chagas
      }
    }
  }
}
`;
export const onDeleteDonor = `subscription OnDeleteDonor {
  onDeleteDonor {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    canDonateFrom
    donations {
      items {
        id
        dateNeeded
        dateFulfilled
        bloodBagId
        bagAmount
      }
      nextToken
    }
    interviews {
      date
      weight
      recentSickness
      recentAntibiotics
      recentPregnancy
      recentAlcohol
      recentVaccines
      recentTattoos
      recentMenstrualCycle
      diabetic
      hypertension
      bloodresults {
        vih
        hepatitisB
        hepatitisC
        syphilis
        chagas
      }
    }
  }
}
`;
export const onCreateMedic = `subscription OnCreateMedic {
  onCreateMedic {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
    patients {
      items {
        id
        firstname
        secondname
        birthday
      }
      nextToken
    }
  }
}
`;
export const onUpdateMedic = `subscription OnUpdateMedic {
  onUpdateMedic {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
    patients {
      items {
        id
        firstname
        secondname
        birthday
      }
      nextToken
    }
  }
}
`;
export const onDeleteMedic = `subscription OnDeleteMedic {
  onDeleteMedic {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
    patients {
      items {
        id
        firstname
        secondname
        birthday
      }
      nextToken
    }
  }
}
`;
export const onCreatePatient = `subscription OnCreatePatient {
  onCreatePatient {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    donations {
      items {
        id
        dateNeeded
        dateFulfilled
        bloodBagId
        bagAmount
      }
      nextToken
    }
    medic {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      hospital {
        city
        country
        address_line1
        address_state
        address_zip
      }
      patients {
        nextToken
      }
    }
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
  }
}
`;
export const onUpdatePatient = `subscription OnUpdatePatient {
  onUpdatePatient {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    donations {
      items {
        id
        dateNeeded
        dateFulfilled
        bloodBagId
        bagAmount
      }
      nextToken
    }
    medic {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      hospital {
        city
        country
        address_line1
        address_state
        address_zip
      }
      patients {
        nextToken
      }
    }
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
  }
}
`;
export const onDeletePatient = `subscription OnDeletePatient {
  onDeletePatient {
    id
    firstname
    secondname
    birthday
    photo {
      bucket
      region
      key
    }
    blood {
      type
      rh
    }
    donations {
      items {
        id
        dateNeeded
        dateFulfilled
        bloodBagId
        bagAmount
      }
      nextToken
    }
    medic {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      hospital {
        city
        country
        address_line1
        address_state
        address_zip
      }
      patients {
        nextToken
      }
    }
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
  }
}
`;
export const onCreateDonation = `subscription OnCreateDonation {
  onCreateDonation {
    id
    dateNeeded
    dateFulfilled
    donatedBy {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      canDonateFrom
      donations {
        nextToken
      }
      interviews {
        date
        weight
        recentSickness
        recentAntibiotics
        recentPregnancy
        recentAlcohol
        recentVaccines
        recentTattoos
        recentMenstrualCycle
        diabetic
        hypertension
      }
    }
    assignedTo {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      donations {
        nextToken
      }
      medic {
        id
        firstname
        secondname
        birthday
      }
      hospital {
        city
        country
        address_line1
        address_state
        address_zip
      }
    }
    bloodBagId
    bloodType {
      type
      rh
    }
    bagAmount
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
  }
}
`;
export const onUpdateDonation = `subscription OnUpdateDonation {
  onUpdateDonation {
    id
    dateNeeded
    dateFulfilled
    donatedBy {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      canDonateFrom
      donations {
        nextToken
      }
      interviews {
        date
        weight
        recentSickness
        recentAntibiotics
        recentPregnancy
        recentAlcohol
        recentVaccines
        recentTattoos
        recentMenstrualCycle
        diabetic
        hypertension
      }
    }
    assignedTo {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      donations {
        nextToken
      }
      medic {
        id
        firstname
        secondname
        birthday
      }
      hospital {
        city
        country
        address_line1
        address_state
        address_zip
      }
    }
    bloodBagId
    bloodType {
      type
      rh
    }
    bagAmount
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
  }
}
`;
export const onDeleteDonation = `subscription OnDeleteDonation {
  onDeleteDonation {
    id
    dateNeeded
    dateFulfilled
    donatedBy {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      canDonateFrom
      donations {
        nextToken
      }
      interviews {
        date
        weight
        recentSickness
        recentAntibiotics
        recentPregnancy
        recentAlcohol
        recentVaccines
        recentTattoos
        recentMenstrualCycle
        diabetic
        hypertension
      }
    }
    assignedTo {
      id
      firstname
      secondname
      birthday
      photo {
        bucket
        region
        key
      }
      blood {
        type
        rh
      }
      donations {
        nextToken
      }
      medic {
        id
        firstname
        secondname
        birthday
      }
      hospital {
        city
        country
        address_line1
        address_state
        address_zip
      }
    }
    bloodBagId
    bloodType {
      type
      rh
    }
    bagAmount
    hospital {
      city
      country
      address_line1
      address_state
      address_zip
    }
  }
}
`;
