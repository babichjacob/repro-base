<script>
    import { base } from "$app/paths";
</script>

<div>
    <nav>
        Visit <a href="{base}/">index</a>.
        Visit <a href="{base}/a">a</a>.
        Visit <a href="{base}/b">b</a>.
    </nav>

    <main>
        <slot />
    </main>
</div>

<style>
    div {
        font-family: sans-serif;
    }

    nav {
        font-weight: bold;
    }

    a {
        color: #08f;
    }
</style>
