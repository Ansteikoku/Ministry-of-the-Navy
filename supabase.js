<!-- supabase.js -->
<script type="module">
    import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

    // ここを書き換える！
    const SUPABASE_URL = "https://xxxxx.supabase.co";
    const SUPABASE_ANON_KEY = "YOUR-ANON-KEY";

    export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
</script>
