import {makeAutoObservable} from "mobx";

export default class ScheduleStore {
    constructor() {
        this._schedule = []
        this._lessons = []
        this._discipline = []
        this._type = []
        this._teacher_lesson = []
        this._teacher = []
        this._table = []
        this._student = []
        makeAutoObservable(this)
    }

    setSchedule(schedule) {
        this._schedule = schedule
    }

    setLesson(lessons) {
        this._lessons = lessons
    }

    setDiscipline(discipline) {
        this._discipline = discipline
    }

    setType(type) {
        this._type = type
    }

    setStudent(student){
        this._student = student
    }

    setTeacherLesson(teacher_lesson) {
        this._teacher_lesson = teacher_lesson
    }

    setTeacher(teacher) {
        this._teacher = teacher
    }

    setTable(table) {
        this._table = table
    }

    searchLesson(id) {
        return this._lessons.filter(lesson => lesson.id === id)[0]
    }

    searchDiscipline(id) {
        return this._discipline.filter(discipline => discipline.id === id)[0]
    }

    searchType(id) {
        return this._type.filter(type => type.id === id)[0]
    }

    searchTeacher(id) {
        const teacher_lesson = this._teacher_lesson.filter(teacher_lesson => teacher_lesson.lessonId === id)[0]
        if(teacher_lesson)
            return this._teacher.filter(teacher => teacher.id === teacher_lesson.teacherId)[0]
        else return null
    }

    searchLink(id) {
        const link = this._teacher_lesson.filter(teacher_lesson => teacher_lesson.lessonId === id)[0]
        if(link)
            return link.link
        else return null
    }

    get schedules() {
        return this._schedule
    }

    get lessons() {
        return this._lessons
    }

    get disciplines() {
        return this._discipline
    }

    get types() {
        return this._type
    }

    get teacher_lesson() {
        return this._teacher_lesson
    }

    get teachers() {
        return this._teacher
    }

    get students() {
        return this._student
    }

    get table() {
        return this._table
    }

    Lesson(week, day, timetableId) {
        return this._schedule.filter(schedule => schedule.week === week)
            .filter(schedule => schedule.day === day)
            .filter(schedule => schedule.timeTableId === timetableId)
    }

}