import { IRawJob } from '@types';

export const mapJobs = (jobsResponse: IRawJob[]) => {
	return jobsResponse.map(
		({ company, jobTitle, fromDate, toDate, description }) => ({
			company: {
				name: company.name,
				logo: company.logo,
				url: company.url,
			},
			jobTitle,
			fromDate,
			toDate,
			// technologies: technologies.map(({ technology }) => technology),
			description: description,
		})
	);
};
