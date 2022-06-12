import { gql } from "apollo-server";

const typeDefs = gql`
    
    type UserSession {
        token: String!
    }

    type UserDetails {
        firstName: String!
        lastName: String!
        phone: String!
        password: String!
        email: String!
        username: String!
        type: String!
        address: Address!
        school: School
    }

    type UserAddress {
        street: String!
        buildingNumber: String!
        apartmentNumber: String!
        country: String!
        city: String!
    }

    input Address {
        street: String!
        buildingNumber: String!
        apartmentNumber: String
        country: String!
        city: String!
    }

    input User {
        firstName: String!
        lastName: String!
        phone: String!
        password: String!
        email: String!
        username: String!
        type: String!
        address: Address!
    }

    input teacher {
        schoolID: UUID
        schoolName: String
        user: User!
    }

    input Admin {
        user: User!
    }

    input Student {
        schoolID: UUID
        schoolName: String
        user: User!
    }

    input School {
        ID: UUID!
        name: String!
        address: Address!
        manager: User
    }

    input Group {
        ID: UUID!
        name: String!
        teacherID: UUID!
        schoolID: UUID!
    }

    input UserLogin {
        username: String!
        password: String!
    }

    type Mutation {

        createStudent(
            student: Student!
        ): String

        createTeacher(
            teacher: Teacher!
        ): String

        createSchool(
            school: School!
        ): String

    }

    type Query {
        login(userLogin: UserLogin!): UserSession!
        userDetails: UserDetails!
    }
`;

export default typeDefs;