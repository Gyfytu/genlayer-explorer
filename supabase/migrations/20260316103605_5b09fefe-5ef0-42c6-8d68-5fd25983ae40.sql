-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  end_date TEXT,
  status TEXT NOT NULL DEFAULT 'upcoming' CHECK (status IN ('live', 'upcoming', 'completed')),
  link TEXT,
  image TEXT,
  discord_link TEXT,
  twitter_link TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Everyone can read events
CREATE POLICY "Events are publicly readable"
  ON public.events FOR SELECT
  USING (true);

-- Allow anonymous inserts/updates/deletes (admin is password-protected in the UI)
CREATE POLICY "Allow all inserts"
  ON public.events FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow all updates"
  ON public.events FOR UPDATE
  USING (true);

CREATE POLICY "Allow all deletes"
  ON public.events FOR DELETE
  USING (true);