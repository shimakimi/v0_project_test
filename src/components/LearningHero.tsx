import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function LearningHero() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          始まりは小さくても、その一歩が未来を変える
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          あなたの学習の旅が今、ここから始まります。
          一つずつ進んでいけば、どんな困難も乗り越えられます。
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="bg-white text-black hover:bg-gray-200 transition-colors duration-300">
            学習を始める
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors duration-300">
            詳細を見る
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}