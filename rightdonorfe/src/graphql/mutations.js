/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDonor = `mutation CreateDonor($input: CreateDonorInput!) {
  createDonor(input: $input) {
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
export const updateDonor = `mutation UpdateDonor($input: UpdateDonorInput!) {
  updateDonor(input: $input) {
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
export const deleteDonor = `mutation DeleteDonor($input: DeleteDonorInput!) {
  deleteDonor(input: $input) {
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
export const createMedic = `mutation CreateMedic($input: CreateMedicInput!) {
  createMedic(input: $input) {
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
export const updateMedic = `mutation UpdateMedic($input: UpdateMedicInput!) {
  updateMedic(input: $input) {
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
export const deleteMedic = `mutation DeleteMedic($input: DeleteMedicInput!) {
  deleteMedic(input: $input) {
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
export const createPatient = `mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
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
export const updatePatient = `mutation UpdatePatient($input: UpdatePatientInput!) {
  updatePatient(input: $input) {
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
export const deletePatient = `mutation DeletePatient($input: DeletePatientInput!) {
  deletePatient(input: $input) {
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
export const createDonation = `mutation CreateDonation($input: CreateDonationInput!) {
  createDonation(input: $input) {
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
export const updateDonation = `mutation UpdateDonation($input: UpdateDonationInput!) {
  updateDonation(input: $input) {
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
export const deleteDonation = `mutation DeleteDonation($input: DeleteDonationInput!) {
  deleteDonation(input: $input) {
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
