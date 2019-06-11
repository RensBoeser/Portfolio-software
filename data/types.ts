interface Member {
	id: number
	firstName: string
	lastName: string
	avatar?: string
	networks: {
		github?: string
		linkedIn?: string
	}
}

interface Project {
	id: number
	title: string
	subtitle: string
	grade?: number | string
	members: Array<number>
	startDate: Date
	endDate: Date
	schoolCurriculum: boolean
}
