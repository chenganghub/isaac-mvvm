type Watcher = {
  addDep: (dep: Dep) => void
}

type Dep = {
  id: number,
  subs: Array<Watcher>,
  addSub: (sub: Watcher) => void,
  removeSub: (sub: Watcher) => void,
  depend: () => void
}