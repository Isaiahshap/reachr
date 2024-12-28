import { IconChart, IconUsers, IconGlobe, IconSpeed } from './icons'

const metrics = [
  {
    icon: IconChart,
    value: '47%',
    label: 'Increase in Conversion',
    description: 'Average improvement in cold call success rates'
  },
  {
    icon: IconUsers,
    value: '10,000+',
    label: 'Active Users',
    description: 'Growing community of sales professionals'
  },
  {
    icon: IconGlobe,
    value: '120+',
    label: 'Countries',
    description: 'Global reach with multi-language support'
  },
  {
    icon: IconSpeed,
    value: '3.2x',
    label: 'Faster Outreach',
    description: 'Improvement in sales team efficiency'
  }
]

export default function Metrics() {
  return (
    <section className="py-16 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <div key={idx} className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-3xl font-mono font-bold text-gray-900">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {metric.description}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 