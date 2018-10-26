## Nova Treeview

### Installation

Require this package with composer.

```shell
composer require reedware/nova-treeview
```

This package uses auto-discovery, so doesn't require you to manually add the service provider. Should you choose to do this manually, you can include the following class in your list of service providers:

```php
\Reedware\NovaTreeview\TreeviewServiceProvider::class
```

### Usage

This packages creates a new `<treeview>` Vue component that can be used within your views. The `<treeview>` component at its core can be used to optionally toggle the display of some sort of menu by clicking its corresponding label. In practice, is recommend to be used by the sidebar in Nova.

Here's the basic syntax:

```html
<treeview tag="li" toggle-tag="h3" toggle-class="sidebar-link dim">
  <template slot="label">
    <svg class="sidebar-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <!-- Some icon -->
    </svg>

    <span class="text-white sidebar-label">
        {{ __('Resources') }}
    </span>
  </template>

  <template slot="menu">
    <!-- Something to optionally display -->
  <template>
</treeview>
```

Which will result in the following:

![Example](/screenshots/example.png?raw=true "Example")

By clicking the "Resources" label, you will expand the resources portion of the sidebar.
