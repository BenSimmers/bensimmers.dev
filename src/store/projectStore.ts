import { create } from "zustand";
import { ProjectType, Repo } from "../utils/types";


type ProjectsStore = {
    projects: ProjectType[];
    isSubscribed: boolean;
    loading: boolean;
    error: string | null;
    actions: {
        fetchProjects: () => Promise<void>;
        markSubscribed: () => void;
    };
}


const useProjectsStore = create<ProjectsStore>((set, get) => ({
    projects: [],
    isSubscribed: false,
    loading: false,
    error: null,
    actions: {
        fetchProjects: async () => {
            const { isSubscribed, loading } = get();
            if (isSubscribed || loading) {
                return;
            }

            set({ loading: true, error: null });
            try {
                const response = await fetch(import.meta.env.VITE_GITHUB_API_URL);
                if (!response.ok) throw new Error("Failed to fetch projects");

                const data: Repo[] = await response.json(); 
                const filteredPublicRepos = data.filter(
                    (repo) => repo.private === false && repo.description !== null
                );
                set({ projects: filteredPublicRepos, loading: false, isSubscribed: true });
            } catch (error) {
                set({
                    loading: false,
                    error: error instanceof Error ? error.message : "Failed to fetch projects",
                });
            }
        },
        markSubscribed: () => set({ isSubscribed: true }),
    },
}))

export const useProjects = () => useProjectsStore((state) => ({
    projects: state.projects,
}));

export const useProjectsStatus = () =>
    useProjectsStore((state) => ({ loading: state.loading, error: state.error }));

export const useProjectsActions = () => useProjectsStore((state) => state.actions);
