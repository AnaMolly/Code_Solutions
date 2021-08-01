import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
	query {
		users {
			_id
			email
      role
			fullName
			company
			profileImage
			userDescription
			sampleProjectName
			sampleProjectURL
			resumeURL
			primaryFocus
			skillSet
			hourlyRate
			linkedIn
			gitHub
			servicesOffered
		}
	}
`;

export const QUERY_SINGLE_USER = gql`
	query getSingleUser($userId: ID!) {
		user(userId: $userId) {
			_id
			email
      role
			fullName
			company
			profileImage
			userDescription
			sampleProjectName
			sampleProjectURL
			resumeURL
			primaryFocus
			skillSet
			hourlyRate
			linkedIn
			gitHub
			servicesOffered
		}
	}
`;