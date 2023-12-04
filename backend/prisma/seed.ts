import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const sports: Prisma.SportCreateInput[] = [
  {
    name: "Hatha Yoga",
    slug: "hatha-yoga",
    location: "TU-H 4001",
    schedule: "23.10.-29.01, Mo, 14:30-15:45",
    details: "Yoga hilft uns über körperliche Übungen zu mehr Gelassenheit und Ruhe zu kommen. Eine der bekanntesten ist Hatha Yoga. Wenn du einen Yogakurs suchst, der Kraft, Beweglichkeit und Entspannung gleichermaßen fördert bist du hier genau richtig.",
    image: "https://cdn.pixabay.com/photo/2017/08/16/04/48/yoga-2646457_1280.jpg",
    participantCount: 0,
  }, 
  {
    name: "Boxen",
    slug: "boxen",
    location: "TU-Sportzentrum Dovestraße 6 / D",
    schedule: "25.10.-14.02, Mi, 17:30-19:00", 
    details: "Erlernen der Grundtechniken des Boxens. Am Ende des Kurses, je nach Lernerfolg, leichtes Sparring",
    image: "https://cdn.pixabay.com/photo/2018/12/01/18/12/box-3849936_1280.jpg",
    participantCount: 0,
  }, 
  {
    name: "Bouldern",
    slug: "bouldern",
    location: "Kletterraum Hüttenweg",
    schedule: "28.10.-15.03, Fr, 16:30-19:30",
    details: "Kleine Fallschule beim Bouldern vermittelt, wie das Verletzungsrisiko und Langzeitschäden durch das Abtrainieren von ungeeigneten Reflexen und das Training von hilfreichen Methoden erheblich verringert werden kann.",
    image: "https://cdn.pixabay.com/photo/2016/01/13/17/09/bouldering-1138492_1280.jpg",
    participantCount: 0,
  }, 
  {
    name: "Aikido",
    slug: "aikido",
    location: "TU-Sportzentrum Dovestraße 6 / C",
    schedule: "24.10.-13.02, Di, 17:45-19:15",
    details: "Aikido, die jüngste japanische Budosportart, ist eine auf traditionelle Kampfkünste zurückgehende Art der Selbstverteidigung. Dabei wird versucht, einem Angriff ohne eigene Aggression zu begegnen.",
    image: "https://cdn.pixabay.com/photo/2019/03/10/18/46/kampfstort-4046939_1280.jpg",
    participantCount: 0,
  }, 
  {
    name: "Body Workout",
    slug: "body-workout",
    location: "TU-Sportzentrum Dovestraße 6 / B",
    schedule: "02.11.-15.02, Do, 20:45-22:00",
    details: "Dieser Kurs ist ideal für alle, die sich an Fitness-Geräten nicht wohl fühlen, sondern lieber in der Kleingruppe trainieren.",
    image: "https://cdn.pixabay.com/photo/2023/09/11/14/19/weight-8246973_1280.jpg",
    participantCount: 0,
  },
  {
    name: "Balett - Anfänger",
    slug: "balett-anfaenger",
    location: "Sportsaal im Gebäude B - Campus Wilhelminenhofstraße",
    schedule: "10.10.-27.02, Di, 17:15-18:45",
    details: "Erlernen aller grundlegenden klassischen Ballettelemente, sowie deren korrekte Ausführung. Schulung der Körperhaltung, der Musikalität und den Aufbau der erforderlichen Muskulatur.",
    participantCount: 0,
  },
  {
    name: "Badminton",
    slug: "badminton",
    location: "TU-Sportzentrum Waldschulallee-A",
    schedule: "03.11.-16.02., Fr, 18:30-20:00",
    details: "Bei unseren Badmintonkursen werden den Teilnehmenden individuell Techniken und Taktiken das Badmintonspiels, je nach Vorkenntnissen auch komplizierte Bewegungsabläufe, näher gebracht. Dafür werden Übungen mit spielerischen Elementen verknüpft, um das Gelernte auszuprobieren und zu festigen.",
    image:"https://cdn.pixabay.com/photo/2016/05/31/23/21/badminton-1428045_1280.jpg",
    participantCount: 0,
  },  
  {
    name: "Judo",
    slug: "judo",
    location: "TU-Sportzentrum Dovestraße 6 / D",
    schedule: "24.10.-16.04., Di, 19:15-20:45",
    details: "Judo ist die Kunst durch Nachgeben zu siegen d.h. die maximale Wirkung mit einem minimalen Kraftaufwand zu erreichen, mit dem Ziel der vollkommenen Anwendung von Körper und Geist. Zentrale Elemente sind Würfe und Haltetechniken sowie Armhebel und Würgetechniken. Judo ist nicht nur eine traditionelle Kampfkunstart, sondern auch moderne Selbstverteidigung und attraktiver Wettkampfsport.",
    participantCount: 0,
  },  
]

async function main() {
    console.log(`Start seeding ...`)
    for (const s of sports) {
      const sport = await prisma.sport.create({
        data: s,
      })
      console.log(`Created sport with name: ${sport.name}`)
    }
    console.log(`Seeding finished.`)
  }
  
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
