import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RocketIcon, BookOpenIcon, UsersIcon } from "lucide-react"

export default function SpaceDetails() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-12 px-4" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          宇宙のように無限の可能性を探求しよう
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "革新的な学習方法",
              description: "最先端のテクノロジーを活用し、あなたの学習スタイルに合わせた革新的な方法で知識を吸収します。",
              icon: <RocketIcon className="h-8 w-8 text-purple-400" />
            },
            {
              title: "包括的なカリキュラム",
              description: "基礎から応用まで、幅広いトピックをカバーする包括的なカリキュラムで、総合的なスキルを身につけます。",
              icon: <BookOpenIcon className="h-8 w-8 text-pink-400" />
            },
            {
              title: "グローバルコミュニティ",
              description: "世界中の学習者とつながり、アイデアを共有し、互いに刺激し合える環境で成長します。",
              icon: <UsersIcon className="h-8 w-8 text-blue-400" />
            }
          ].map((item, index) => (
            <Card key={index} className="bg-black bg-opacity-70 border-none text-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-center space-x-2 text-center">
                  {item.icon}
                  <span>{item.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}