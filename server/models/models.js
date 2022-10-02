const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Teacher = sequelize.define('teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, unique: true, allowNull: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: true},
    telegram: {type: DataTypes.STRING, unique: true, allowNull: true}
})

const Student = sequelize.define('student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    telegramId: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Lesson = sequelize.define('lesson', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Discipline = sequelize.define('discipline', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    elective: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Schedule = sequelize.define('schedule', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    week: {type: DataTypes.INTEGER, allowNull: false},
    day: {type: DataTypes.INTEGER, allowNull: false},
})

const TimeTable = sequelize.define('time_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start: {type: DataTypes.STRING, unique: true, allowNull: false},
    end: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const TeacherLesson = sequelize.define('teacher_lesson', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    link: {type: DataTypes.STRING, allowNull: true},
})

const StudentDiscipline = sequelize.define('student_discipline', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Teacher.belongsToMany(Lesson, {through: TeacherLesson})
Lesson.belongsToMany(Teacher, {through: TeacherLesson})

Student.belongsToMany(Discipline, {through: StudentDiscipline})
Discipline.belongsToMany(Student, {through: StudentDiscipline})

Discipline.hasMany(Lesson)
Lesson.belongsTo(Discipline)

Type.hasMany(Lesson)
Lesson.belongsTo(Type)

Lesson.hasMany(Schedule)
Schedule.belongsTo(Lesson)

TimeTable.hasMany(Schedule)
Schedule.belongsTo(TimeTable)

module.exports = {
    Teacher,
    Student,
    Lesson,
    Discipline,
    Schedule,
    TimeTable,
    Type,
    TeacherLesson,
    StudentDiscipline
}