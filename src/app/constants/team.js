import { matvey, yura, nikolay, asya } from '../assets'

const team = [
	{
		id: 1,
		name: 'Юрий Штандаров',
		age: 20,
		description:
			'Cпособен быстро адаптироваться к любой ситуации и эффективно решать поставленные задачи. Имею высокую скорость работы, большой запас выносливости и никогда не сдаюсь даже перед самыми сложными и трудными проектами. Я всегда стремлюсь к совершенству, работаю над улучшением своих навыков и применяю новые решения, чтобы сделать свою работу еще лучше и более эффективной.',
		photo: yura,
		qualities: ['Целеустремлённость', 'Креативность'],
		github: 'https://github.com/yucheg2',
		tasksDone: ['Слайдер', 'Cтраница избранных', 'Badge'],
		skills: [
			{ name: 'HTML', percent: 50 },
			{ name: 'CSS', percent: 70 },
			{ name: 'JavaScript', percent: 40 },
		],
	},
	{
		id: 2,
		name: 'Матвей Клёнов',
		age: 20,
		description:
			'По настоящему люблю писать код, не боюсь брать на себя сложные задачи, прекрасно понимаю как работать в команде, т.к в прошлом был профессиональным спортсменом. Постоянно работаю над собой, изучаю новые подходы, но никогда не забываю про фундаментальные знания, которую играют важную роль в разработке. Мои хобби: тренажёрный зал, сборка кубика Рубика и карточные фокусы.',
		photo: matvey,
		qualities: ['Дисциплинированность', 'Коммуникабельность'],
		github: 'https://github.com/y0na24',
		tasksDone: [
			'Redux Toolkit & LocalStorage',
			'Страница участнка',
			'BreadCrumbs',
			'Дизайн проекта',
		],
		skills: [
			{ name: 'HTML', percent: 50 },
			{ name: 'CSS', percent: 70 },
			{ name: 'JavaScript', percent: 40 },
		],
	},
	{
		id: 3,
		name: 'Казанцева Анастасия',
		age: 36,
		photo: asya,
		description:
			'Люблю учиться новому, ставить недостижимые цели и медленно, но упорно, шаг за шагом, достигать их',
		qualities: ['Усидчивость', 'Обучаемость', 'Целеустремленность'],
		github: 'https://github.com/asyakz',
		tasksDone: ['Роутинг', 'Название и описание команды', 'ProgressBar'],
		skills: [
			{ name: 'HTML', percent: 50 },
			{ name: 'CSS', percent: 70 },
			{ name: 'JavaScript', percent: 40 },
		],
	},
	{
		id: 4,
		name: 'Антонов Николай',
		age: 26,
		photo: nikolay,
		description:
			'Целиком и полностью полагаюсь на жизненное кредо, которое гласит: Поставил цель - добился',
		qualities: ['Веселый', 'Дерзкий', 'Уверенный'],
		github: 'https://github.com/Anti6ot',
		tasksDone: ['Навигационное меню', 'Карточка участника', 'Интро'],
		skills: [
			{ name: 'HTML', percent: 50 },
			{ name: 'CSS', percent: 70 },
			{ name: 'JavaScript', percent: 40 },
		],
	},
]

export default team
