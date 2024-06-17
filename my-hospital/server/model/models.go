package models

import (
    "time"
)

// Doctor represents the structure for doctor details
type Doctor struct {
    FirstName  string    `json:"firstName" bson:"firstName" validate:"required,min=2,max=100"`
    LastName   string    `json:"lastName" bson:"lastName" validate:"required,min=2,max=100"`
    Email      string    `json:"email" bson:"email" validate:"required"`
    Department string    `json:"department" bson:"department" validate:"required,min=2,max=100,eq=NEURO|eq=CARDIO|eq=DENTAL"`
    License    time.Time `json:"license" bson:"license" validate:"required"`
}

// Patient represents the structure for patient details
type Patients struct {
    FirstName        string    `json:"firstName" bson:"firstName" validate:"required,min=2,max=100"`
    LastName         string    `json:"lastName" bson:"lastName" validate:"required,min=2,max=100"`
    DateOfBirth      time.Time `json:"dateOfBirth" bson:"dateOfBirth" validate:"required"`
    RegistrationDate time.Time `json:"registrationDate" bson:"registrationDate" validate:"required"`
    Email            string    `json:"email" bson:"email" validate:"required,email"`
    PhoneNumber      string    `json:"phoneNumber" bson:"phoneNumber" validate:"required,min=10,max=15"`
    Address          string    `json:"address" bson:"address" validate:"required,min=5,max=200"`
}
