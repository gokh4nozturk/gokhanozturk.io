import AnimatedLink from 'app/components/AnimatedLink'

export default function Blog() {
  return (
    <div className="flex w-full flex-col items-start">
      <div className="flex gap-4">
        <span className="text-gray-500">1.10.2023</span>
        <AnimatedLink
          href="https://medium.com/@gokhaanozturk/vue-js-ile-özelleştirilebilir-breadcrumb-bileşeni-oluşturma-92a8e94a199e"
        >
          breadcrumbs
        </AnimatedLink>
      </div>
    </div>
  )
}
