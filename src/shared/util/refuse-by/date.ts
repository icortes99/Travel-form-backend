export default function validateAge(birth: Date, minAge: number): boolean {
  const age = getAge(birth)

  return age >= minAge
}

export function getAge(birth: Date): number {
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate()))
    age--

  return age
}