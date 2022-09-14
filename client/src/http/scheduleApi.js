import {$host} from "./index";

export const fetchSchedule = async () => {
    const {data} = await $host.get('api/schedule')
    return data
}

export const fetchLesson = async () => {
    const {data} = await $host.get('api/lesson')
    return data
}

export const fetchDiscipline = async () => {
    const {data} = await $host.get('api/discipline')
    return data
}

export const fetchType = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchTeacherLesson = async () => {
    const {data} = await $host.get('api/teacherlesson')
    return data
}

export const fetchTeacher = async () => {
    const {data} = await $host.get('api/teacher')
    return data
}

export const createTeacher = async (newTeacher) => {
    const {data} = await $host.post('api/teacher', newTeacher)
    return data
}

export const updateTeacher = async (teacher) => {
    const {data} = await $host.put('api/teacher', teacher)
    return data
}

export const deleteTeacher = async (id) => {
    const {data} = await $host.delete('api/teacher/' + id)
    return data
}