/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDonor = `query GetDonor($id: ID!) {
  getDonor(id: $id) {
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
export const listDonors = `query ListDonors(
  $filter: ModelDonorFilterInput
  $limit: Int
  $nextToken: String
) {
  listDonors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getMedic = `query GetMedic($id: ID!) {
  getMedic(id: $id) {
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
export const listMedics = `query ListMedics(
  $filter: ModelMedicFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPatient = `query GetPatient($id: ID!) {
  getPatient(id: $id) {
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
export const listPatients = `query ListPatients(
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getDonation = `query GetDonation($id: ID!) {
  getDonation(id: $id) {
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
export const listDonations = `query ListDonations(
  $filter: ModelDonationFilterInput
  $limit: Int
  $nextToken: String
) {
  listDonations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      dateNeeded
      dateFulfilled
      donatedBy {
        id
        firstname
        secondname
        birthday
        canDonateFrom
      }
      assignedTo {
        id
        firstname
        secondname
        birthday
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
    nextToken
  }
}
`;
export const searchDonors = `query SearchDonors(
  $filter: SearchableDonorFilterInput
  $sort: SearchableDonorSortInput
  $limit: Int
  $nextToken: String
) {
  searchDonors(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchMedics = `query SearchMedics(
  $filter: SearchableMedicFilterInput
  $sort: SearchableMedicSortInput
  $limit: Int
  $nextToken: String
) {
  searchMedics(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchPatients = `query SearchPatients(
  $filter: SearchablePatientFilterInput
  $sort: SearchablePatientSortInput
  $limit: Int
  $nextToken: String
) {
  searchPatients(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
  }
}
`;
export const searchDonations = `query SearchDonations(
  $filter: SearchableDonationFilterInput
  $sort: SearchableDonationSortInput
  $limit: Int
  $nextToken: String
) {
  searchDonations(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      dateNeeded
      dateFulfilled
      donatedBy {
        id
        firstname
        secondname
        birthday
        canDonateFrom
      }
      assignedTo {
        id
        firstname
        secondname
        birthday
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
    nextToken
  }
}
`;
