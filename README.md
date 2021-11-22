# enzyme-react-context
Checking how different 

```
  Config: wrappingComponent: Provider
    Component: FunctionComponent
      Method: shallow
        ✕ correct render with shallow (3 ms)
        ✕ get context with shallow
      Method: mount
        ✓ correct render with mount (1 ms)
        ✕ get context with mount
    Component: ClassComponent
      Method: shallow
        ✕ correct render with shallow
        ✕ get context with shallow
      Method: mount
        ✓ correct render with mount (1 ms)
        ✕ get context with mount
    Component: LegacyConsumerClassComponent
      Method: shallow
        ✕ correct render with shallow (1 ms)
        ✕ get context with shallow
      Method: mount
        ✕ correct render with mount
        ✕ get context with mount (1 ms)
  Config: wrappingComponent: LegacyProvider
    Component: FunctionComponent
      Method: shallow
        ✕ correct render with shallow
        ✕ get context with shallow
      Method: mount
        ✕ correct render with mount (1 ms)
        ✕ get context with mount
    Component: ClassComponent
      Method: shallow
        ✕ correct render with shallow (1 ms)
        ✕ get context with shallow (1 ms)
      Method: mount
        ✕ correct render with mount
        ✕ get context with mount
    Component: LegacyConsumerClassComponent
      Method: shallow
        ✓ correct render with shallow
        ✓ get context with shallow
      Method: mount
        ✓ correct render with mount
        ✓ get context with mount (1 ms)
  Config: context prop
    Component: FunctionComponent
      Method: shallow
        ✕ correct render with shallow
        ✕ get context with shallow
      Method: mount
        ✕ correct render with mount
        ✕ get context with mount (1 ms)
    Component: ClassComponent
      Method: shallow
        ✕ correct render with shallow
        ✕ get context with shallow
      Method: mount
        ✕ correct render with mount (1 ms)
        ✕ get context with mount
    Component: LegacyConsumerClassComponent
      Method: shallow
        ✓ correct render with shallow
        ✓ get context with shallow (1 ms)
      Method: mount
        ✓ correct render with mount
        ✓ get context with mount
```