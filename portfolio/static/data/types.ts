type TextualGrade = "O" | "V" | "G"
type Grade = number | TextualGrade

interface Member {
	id: number
	firstName: string
	lastName: string
	avatar?: string
	networks: {
		github?: string
		linkedIn?: string
		portfolio?: string
		[key: string]: string
	}
}

interface ProjectMember {
	member: Member["id"]
	grade?: Grade
	projectDescription?: string
}

interface Project {
	id: number
	title: string
	subtitle: string
	members: Array<ProjectMember>
	startDate: Date
	endDate?: Date
	schoolCurriculum: boolean
	description?: string
}
