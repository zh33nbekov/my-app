import {
	AWS,
	CSS,
	ESLint,
	Figma,
	Git,
	GitHub,
	GraphQL,
	HTML,
	Insomnia,
	JavaScript,
	MongoDB,
	MUI,
	NestJS,
	NextJS,
	NodeJS,
	Postman,
	Prettier,
	React,
	Redux,
	Sass,
	Scss,
	Socket,
	Styled,
	Tailwind,
	TypeScript,
	VSCode,
	Webpack,
	WebStorm,
} from '../../../../../public/icons'

interface Skill {
	icon: React.ElementType
	category: string
	name: string
}
export type SkillsCategoryTypes = 'all' | 'language' | 'styling' | 'tools'

export const SKILLS: Skill[] = [
	{ icon: HTML, category: 'language', name: 'HTML' },
	{ icon: CSS, category: 'styling', name: 'CSS' },
	{ icon: JavaScript, category: 'language', name: 'JavaScript' },
	{ icon: TypeScript, category: 'language', name: 'TypeScript' },
	{ icon: React, category: '', name: 'React' },
	{ icon: NextJS, category: '', name: 'NextJS' },
	{ icon: Redux, category: '', name: 'Redux' },
	{ icon: NodeJS, category: '', name: 'NodeJS' },
	{ icon: NestJS, category: '', name: 'NestJS' },
	{ icon: AWS, category: '', name: 'AWS' },
	{ icon: MongoDB, category: '', name: 'MongoDB' },
	{ icon: Tailwind, category: 'styling', name: 'Tailwind' },
	{ icon: Sass, category: 'styling', name: 'Sass' },
	{ icon: Scss, category: 'styling', name: 'Scss' },
	{ icon: GraphQL, category: '', name: 'GraphQL' },
	{ icon: Prettier, category: 'tools', name: 'Prettier' },
	{ icon: ESLint, category: 'tools', name: 'ESLint' },
	{ icon: Webpack, category: '', name: 'Webpack' },
	{ icon: MUI, category: '', name: 'MUI' },
	{ icon: Git, category: 'tools', name: 'Git' },
	{ icon: GitHub, category: 'tools', name: 'GitHub' },
	{ icon: Insomnia, category: 'tools', name: 'Insomnia' },
	{ icon: Postman, category: 'tools', name: 'Postman' },
	{ icon: WebStorm, category: 'tools', name: 'WebStorm' },
	{ icon: VSCode, category: 'tools', name: 'VSCode' },
	{ icon: Figma, category: 'tools', name: 'Figma' },
	{ icon: Styled, category: 'styling', name: 'Styled components' },
	{ icon: Socket, category: 'tools', name: 'Socket.io' },
]
