import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Council of Regents | NCAS',
  description: 'Council of Regents of the National Centre for Advanced Studies in Humanities and Social Sciences',
}

const councilMembers = [
  {
    name: 'Hon. Dr. Harini Amarasuriya',
    position: 'Hon. Prime Minister and the Minister Ministry of Education, Higher Education and Vocational Education',
    role: 'Chairman, COR'
  },
  {
    name: 'Senior Professor Kapila Seneviratne',
    position: 'Chairman, UGC',
    role: ''
  },
  {
    name: 'Senior Professor Prashanthi Narangoda',
    position: 'Director, NCAS',
    role: ''
  },
  {
    name: 'Professor W M P S Bandara',
    position: 'UGC Nominee Department of Fine Arts, University of Peradeniya',
    role: ''
  },
  {
    name: 'Ven. Prof. Pinnawala Sangasumana Thero',
    position: 'UGC Nominee Department of Geography, University of Sri Jayewardenepura',
    role: ''
  },
  {
    name: 'Professor T. Sanathanane',
    position: 'Head, Dept. of Fine Arts, Faculty of Arts, University of Jaffna',
    role: ''
  },
  {
    name: 'Mr. I. Renuka Priyantha',
    position: 'Dean, Faculty of Humanities and Social Sciences, University of Ruhuna',
    role: ''
  },
  {
    name: 'Prof. S. Raguram',
    position: 'Dean, Faculty of Arts, University of Jaffna',
    role: ''
  },
  {
    name: 'Professor N S Punchihewa',
    position: 'Dean, Faculty of Law, University of Colombo',
    role: ''
  },
  {
    name: 'Dr. E.M.P.C.S. Ekanayake',
    position: 'Dean, Faculty of Arts, University of Peradeniya',
    role: ''
  },
  {
    name: 'Senior Professor L Manawaddu',
    position: 'Dean, Faculty of Arts, University of Colombo',
    role: ''
  },
  {
    name: 'Professor M M Gunathilake',
    position: 'Dean, Faculty of Social Sciences, University of Kelaniya',
    role: ''
  }
]

export default function CouncilOfRegentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Council of Regents of NCAS</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Members of the Council</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Position</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {councilMembers.map((member, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="border border-gray-300 px-4 py-3 font-medium">{member.name}</td>
                      <td className="border border-gray-300 px-4 py-3">{member.position}</td>
                      <td className="border border-gray-300 px-4 py-3">{member.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About the Council</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">
              The Council of Regents is the governing body of the National Centre for Advanced Studies in Humanities and Social Sciences (NCAS).
              The Council is responsible for providing strategic direction and oversight for the Centre's activities and ensuring alignment with
              national priorities in higher education and research.
            </p>
            <p className="leading-relaxed mt-4">
              The Council comprises distinguished academics, university administrators, and representatives from relevant government ministries,
              bringing together expertise from various fields in humanities and social sciences.
            </p>
          </CardContent>
        </Card>

        {/* Footer Information */}
        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>National Centre for Advanced Studies in Humanities & Social Sciences</p>
          <p>6A, Sukhastan Gardens, Ward Place, Colombo – 07, Sri Lanka</p>
          <p>Tel: +94 011 2680849 | Fax: +94 011 269 3975 | Email: info@ncas.ac.lk</p>
        </div>
      </div>
    </div>
  )
}