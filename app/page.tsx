import RoutineCard from "@/components/RoutineCard";

export default function Home() {
  return (
    <div className="container py-20">
      <div>
        <h1 className="mb-10">
          Your routine
        </h1>

        <RoutineCard />
      </div>
    </div>
  )
}
