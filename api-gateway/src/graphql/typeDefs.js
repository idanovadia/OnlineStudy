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
        address: UserAddress!
        school: UserSchool
    }

    type UserAddress {
        street: String!
        buildingNumber: String!
        apartmentNumber: String!
        country: String!
        city: String!
    }

    type UserAddress {
        street: String!
        buildingNumber: String!
        apartmentNumber: String
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

    type UserType {
        firstName: String!
        lastName: String!
        phone: String!
        password: String!
        email: String!
        username: String!
        type: String!
        address: UserAddress!
    }

    input Teacher {
        schoolID: ID
        schoolName: String
        user: User!
    }

    input Admin {
        user: User!
    }

    input Student {
        schoolID: ID
        schoolName: String
        user: User!
    }

    input School {
        ID: ID!
        name: String!
        address: Address!
        manager: User
    }

    type UserSchool {
        ID: ID!
        name: String!
        address: UserAddress!
        manager: UserType
    }

    input Group {
        ID: ID!
        name: String!
        teacherID: ID!
        schoolID: ID!
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