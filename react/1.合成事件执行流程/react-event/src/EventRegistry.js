export const allNativeEvents = new Set()
// export const registrationNameDependencies = {}

/**
 * input keydown change => onChange
 * onChange [ input keydown change ]
 * 注册两个阶段事件
 * @param {*} registrationName 注册名称
 * @param {*} dependencies 依赖的事件
 */
export function registerTwoPhaseEvent(registrationName, dependencies) {
  registerDirectEvent(registrationName, dependencies)
  registerDirectEvent(registrationName + "Capture", dependencies)
}

export function registerDirectEvent(registrationName, dependencies) {
  for (let i = 0; i < dependencies.length; i++) {
    allNativeEvents.add(dependencies[i])
  }
}
